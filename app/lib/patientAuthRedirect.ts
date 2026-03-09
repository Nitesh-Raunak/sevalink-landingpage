export function redirectToPatientAuth(action: 'login' | 'signup') {
  const baseUrl = process.env.NEXT_PUBLIC_PATIENT_AUTH_URL || 'https://patient.sevalinkcare.com';
  const path = action === 'login' ? '/login' : '/signup';
  window.location.href = `${baseUrl}${path}`;
}
