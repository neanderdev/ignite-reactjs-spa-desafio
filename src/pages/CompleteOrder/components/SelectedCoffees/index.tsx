import { useCart } from '../../../../hooks/useCart'

import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'

import { TitleText } from '../../../../components/Typography'

import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((coffee) => (
          <CoffeeCartCard key={coffee.id} coffee={coffee} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
