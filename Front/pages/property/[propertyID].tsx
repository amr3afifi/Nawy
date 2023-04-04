import { useRouter } from 'next/router'

export default function PropertyPage() {

  const router = useRouter()
  const id = router.query.propertyID as string
  
  return (
    <div>
      <h1>Property: {id}</h1>
    </div>
  )
}