import { RegularText, TitleText } from '../../components/Typography'

import { OrderConfirmedContainer } from './styles'

export function OrderConfirmedPage() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>

        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
    </OrderConfirmedContainer>
  )
}
