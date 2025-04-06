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

  try {
    const response = await fetch(
      "http://212.109.195.50:8000/api/v1/applications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, description: order }),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка при отправке данных на сервер");
    } else {
      const result = await response.json();
      return { success: result.message || "Заявка успешно отправлена!" };
    }
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Неизвестная ошибка",
    };
  }
}
