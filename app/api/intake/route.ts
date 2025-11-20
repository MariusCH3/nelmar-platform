import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { prisma } from "@/lib/db";

type IntakePayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  websiteUrl?: string;
  projectTypes?: string[] | string;
  goals?: string;
  budgetRange?: string;
  needsIT?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IntakePayload;
    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        { error: "Emailul este obligatoriu." },
        { status: 400 }
      );
    }

    const projectTypesValue =
      Array.isArray(body.projectTypes) && body.projectTypes.length > 0
        ? body.projectTypes.join(",")
        : typeof body.projectTypes === "string"
        ? body.projectTypes
        : "";

    const intakeLead = await prisma.intakeLead.create({
      data: {
        email,
        fullName: body.fullName ?? null,
        phone: body.phone ?? null,
        companyName: body.companyName ?? null,
        websiteUrl: body.websiteUrl ?? null,
        projectTypes: projectTypesValue,
        goals: body.goals ?? null,
        budgetRange: body.budgetRange ?? null,
        needsIT: Boolean(body.needsIT),
        rawAnswers: body,
      },
    });

    const supabaseUserId = await provisionSupabaseUser(email);
    await triggerProjectProvisioning(intakeLead.id, supabaseUserId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save intake lead", error);
    return NextResponse.json(
      { error: "Nu am putut salva cererea. Încearcă din nou în câteva minute." },
      { status: 500 }
    );
  }
}

async function provisionSupabaseUser(email: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.warn(
      "[Intake] Supabase service role key is missing. Skipping user provisioning."
    );
    return null;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    email_confirm: false,
  });

  if (error) {
    console.error("[Intake] Failed to create Supabase user", error);
    return null;
  }

  return data.user?.id ?? null;
}

async function triggerProjectProvisioning(
  intakeLeadId: string,
  supabaseUserId: string | null
) {
  // Placeholder logic until Client/Project/Roadmap models are ready.
  console.info(
    `[Intake] Provisioning workflow queued for lead ${intakeLeadId}. Supabase user: ${supabaseUserId}`
  );
}

