import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-8 w-8" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[196px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[84px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[110px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[260px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[64px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-8 w-[92px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-8 w-[92px]" />
        </TableCell>
      </TableRow>
    )
  })
}
