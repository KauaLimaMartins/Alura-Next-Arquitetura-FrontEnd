import { Text } from "@alura/design-system/components/Text";
import { sum } from "@alura/utils/math/sum";

export default function Home() {
  return (
    <main>
      <Text tag="h1">Teste</Text>

      <Text tag="p">
        Importando modulo local: Alura sum, 2 + 2 = {sum(2, 2)}
      </Text>
    </main>
  );
}
