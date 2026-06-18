import { Router } from "express";
import { db } from "@workspace/db";
import { applicationsTable } from "@workspace/db";
import { SubmitApplicationBody } from "@workspace/api-zod";

const router = Router();

router.post("/", async (req, res) => {
  const parsed = SubmitApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation error", details: parsed.error.flatten() });
    return;
  }

  const data = parsed.data;

  const [application] = await db
    .insert(applicationsTable)
    .values({
      role: data.role,
      name: data.name,
      organization: data.organization ?? null,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message ?? null,
      consent: data.consent,
    })
    .returning();

  req.log.info({ applicationId: application.id }, "Application submitted");

  res.status(201).json({
    id: application.id,
    role: application.role,
    name: application.name,
    organization: application.organization,
    email: application.email,
    phone: application.phone,
    message: application.message,
    consent: application.consent,
    createdAt: application.createdAt.toISOString(),
  });
});

router.get("/", async (req, res) => {
  const applications = await db
    .select()
    .from(applicationsTable)
    .orderBy(applicationsTable.createdAt);

  res.json(
    applications.map((a) => ({
      id: a.id,
      role: a.role,
      name: a.name,
      organization: a.organization,
      email: a.email,
      phone: a.phone,
      message: a.message,
      consent: a.consent,
      createdAt: a.createdAt.toISOString(),
    }))
  );
});

export default router;
