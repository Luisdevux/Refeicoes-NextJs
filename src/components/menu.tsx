import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/refeicoes">Refeições</Link></li>
      </ul>
    </div>
  )
}