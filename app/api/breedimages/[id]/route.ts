import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: "Breed ID is required" },
      { status: 400 }
    );
  }

  try {
    console.log("id", id);
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=5`,
      {
        headers: {
          "x-api-key": process.env.CAT_API_KEY as string,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch breed details");
    }

    const data = await response.json();
    console.log("response", data);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch breed details" },
      { status: 500 }
    );
  }
}
