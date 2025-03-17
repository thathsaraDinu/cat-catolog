import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/breeds?limit=20",
      {
        headers: {
          "x-api-key": process.env.CAT_API_KEY as string, // Use environment variable
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cat breeds");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch cat breeds" },
      { status: 500 }
    );
  }
}
