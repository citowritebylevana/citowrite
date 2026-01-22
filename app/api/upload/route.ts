// app/api/upload/route.ts
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  // Validasi: Pastikan ada filename dan body file
  if (!filename || !request.body) {
    return NextResponse.json(
      { error: "Filename and file body are required" },
      { status: 400 },
    );
  }

  try {
    // Proses Upload ke Vercel Blob
    const blob = await put(filename, request.body, {
      access: "public", // PENTING: Agar file bisa dibuka siapa saja (termasuk via WA)
    });

    // Mengembalikan data file yang berhasil diupload
    return NextResponse.json({
      success: true,
      fileUrl: blob.url, // Ini link public yang kita cari
      fileName: filename,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
