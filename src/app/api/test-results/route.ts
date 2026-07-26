import { NextResponse } from 'next/server';

// Simulasi Database Sementara (Sesuai Standar JSON Contract kita)
const mockDatabase = {
  projectId: "PNC-LOG-001",
  projectName: "Logistic Management System",
  environment: "staging",
  summary: { total: 1245, passed: 1180, failed: 65, passRate: 94.7 },
  failedLogs: [
    { id: 1, testCase: "Login dengan kredensial invalid", error: "Element #btn-login not found in 5000ms", tool: "Playwright" },
    { id: 2, testCase: "Checkout barang tanpa stok", error: "Expected status 400 but got 200", tool: "k6" },
    { id: 3, testCase: "Akses menu HRIS tanpa token", error: "Unauthorized Exception", tool: "Cucumber" }
  ]
};

export async function GET() {
  // Mengembalikan data JSON ke Frontend
  return NextResponse.json(mockDatabase);
}

export async function POST(request: Request) {
  // Nantinya, CI/CD akan menembak data ke sini
  const data = await request.json();
  console.log("Data diterima dari CI/CD:", data);
  return NextResponse.json({ message: "Payload berhasil diterima dan disimpan" }, { status: 201 });
}
