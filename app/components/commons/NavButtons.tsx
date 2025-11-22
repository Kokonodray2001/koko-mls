import { Button } from "@mui/material"

interface Props{
    pageName : string
}
export default function NavButtons({pageName} : Props) {
  return (
    <div>
      <Button className="">
        {pageName}
      </Button>
    </div>
  )
}
