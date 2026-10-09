// Form submissions are emailed through Web3Forms. Get a free access key at
// web3forms.com (sign up with the inbox you want leads sent to) and paste it
// here. Until then, forms fall back to opening the visitor's email app.
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'
export const CONTACT_EMAIL = 'hello@linocondigital.com'

const formsConfigured = !WEB3FORMS_ACCESS_KEY.startsWith('YOUR_')

// Returns true when the lead was delivered, false when it wasn't (or forms
// aren't configured yet) so the caller can fall back.
export async function sendLead(subject, fields) {
  if (!formsConfigured) return false
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject, ...fields }),
    })
    const result = await res.json()
    return Boolean(result.success)
  } catch {
    return false
  }
}

export function mailtoLink(subject, fields) {
  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
