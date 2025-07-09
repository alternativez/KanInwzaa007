let PersonalData = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    year: 1,
    allergy: 'None',
    birthdate: '2000-01-01',
    description: 'A brief description about John Doe.',
  },
];

let counter = 2;

export async function GET() {
  return Response.json({ PersonalData });
}

export async function POST(request: Request) {
  const data = await request.json();

  const NewPersonalData = {
    id: counter++,
    firstname: data.firstname,
    lastname: data.lastname,
    year: data.year,
    allergy: data.allergy || 'None.',
    birthdate: data.birthdate,
    description: data.description || 'No description provided.',
  };

  PersonalData.push(NewPersonalData);
  return Response.json({ message: 'Data received successfully', newEntry: NewPersonalData });
}