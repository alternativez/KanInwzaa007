export async function GET() {
  return Response.json({ name: 'John Doe', age: 30, city: 'New York' })
}

export async function POST() {
  return Response.json({ message: 'Data received successfully' })
}