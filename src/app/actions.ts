"use server";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const FORMSPREE_FORM_ID = process.env.FORMSPREE_FORM_ID;

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !phone || !email) {
    return {
      status: "error",
      message: "Please fill in your name, phone, and email.",
    };
  }

  if (!FORMSPREE_FORM_ID) {
    console.error(
      "FORMSPREE_FORM_ID is not set — quote request was not sent:",
      { name, phone, email, service, message }
    );
    return {
      status: "error",
      message:
        "Sorry, the quote form isn't fully set up yet. Please call or email us directly.",
    };
  }

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        service: service || "Not specified",
        message: message || "(no message provided)",
        _replyto: email,
        _subject: `New quote request from ${name}`,
      }),
    });

    if (!res.ok) {
      throw new Error(`Formspree responded with status ${res.status}`);
    }
  } catch (error) {
    console.error("Failed to submit quote request to Formspree:", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your request. Please call or email us directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks! We've got your request and will be in touch soon.",
  };
}
