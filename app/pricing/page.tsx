import { PricingTable } from "@clerk/nextjs"

const PricingPage = () => {
  return (
    <>
        <PricingTable newSubscriptionRedirectUrl="/dashboard" />
    </>
  )
}

export default PricingPage