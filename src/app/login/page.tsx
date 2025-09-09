import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-center p-2">Página de login</h1>
      <form
        className="p-2 flex-col justify-items-center"
      >
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" />
        </div>
        <div className="pt-2">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" />
        </div>
        <div className="pt-2">
          <Button
            className="bg-blue-600 hover:bg-blue-500"
          >
            Login
            </Button>
        </div>
      </form>
    </div>
  )
}