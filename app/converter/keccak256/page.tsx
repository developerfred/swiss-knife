"use client";

import { useState } from "react";
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { toHex, keccak256 as toKeccak256 } from "viem";
import bigInt from "big-integer";
import { InputField } from "@/components/InputField";

const Keccak256 = () => {
  const [userInput, setUserInput] = useState<string>();
  const [keccak256, setKeccak256] = useState<string>();

  return (
    <>
      <Heading color={"custom.pale"}>Keccak256 Converter</Heading>
      <Table mt={"3rem"} variant={"unstyled"}>
        <Tbody>
          <Tr>
            <Td>Input</Td>
            <Td>
              <InputField
                placeholder="string or hex (starting with 0x)"
                value={userInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setUserInput(value);

                  const inHex = value.startsWith("0x")
                    ? (value as `0x${string}`)
                    : toHex(value);
                  setKeccak256(toKeccak256(inHex));
                }}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Keccak256</Td>
            <Td>
              <InputField
                placeholder="Keccak256"
                value={keccak256}
                onChange={() => {}}
                isReadOnly
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default Keccak256;
