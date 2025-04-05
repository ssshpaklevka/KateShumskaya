'use server';
import process from 'process';

import type { CreateEmailResponseSuccess } from 'resend';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailResponse =
  | { success: true; data: CreateEmailResponseSuccess | null }
  | { success: false; error: string };

export async function sendEmail(
  name: string,
  email: string,
  description: string,
): Promise<SendEmailResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: 'KateShumskaya <kate@shumskayakate.com>',
      to: 'ks@shumskayakate.com',
      subject: 'Новая заявка с сайта',
      html: `
        <h2>Заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Произошла ошибка при отправке',
    };
  }
}
