"use server";

export async function submitOrder(
  prevState: { error?: string | null; success?: string | null },
  formData: FormData
): Promise<{ error?: string; success?: string }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const order = formData.get("order") as string;

  if (!name || !email || !phone || !order) {
    return { error: "Все поля обязательны для заполнения" };
  }

  // Валидация email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Введите корректный email" };
  }

  console.log("Form submitted:", { name, email, phone, order });

  return { success: "Заявка успешно отправлена!" };
}
