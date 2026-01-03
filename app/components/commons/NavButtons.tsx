'use client';
import { Button } from "@mui/material"

interface Props{
    pageName : string
}
export default function NavButtons({pageName} : Props) {
  return (
    <div className="h-fit bg-black m-2 border-2 rounded-2xl hover:bg-gray-600">
      <Button>
        {pageName}
      </Button>
    </div>
  )
}
