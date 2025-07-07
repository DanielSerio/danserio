import { Table } from "#core/components";
import { PokeTableBody } from "./PokeTableBody";
import { PokeTableHeader } from "./PokeTableHeader";
import { PokeTableToolbar } from "./PokeTableToolbar";

export function PokeTable() {
  return (
    <>
      <PokeTableToolbar />

      <Table className="poke-table">
        <PokeTableHeader />
        <PokeTableBody />
      </Table>
    </>
  );
}
