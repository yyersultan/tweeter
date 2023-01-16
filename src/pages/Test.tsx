import { Box, Button, ListSubheader, MenuItem, Select, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import { users } from "../data/users";
import { useForms } from "../hooks /useForms";

export const Test = () => {
  const [search_pos, setSearchPos] = useState("");
  const [form, onChange, onSubmit] = useForms();
  const handleSearchPos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPos(e.target.value);
  }
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.includes(search_pos));
  }, [search_pos]);
  return (
    <div style={{ padding: "20px" }}>

      <TextField name="name" value={form.name} onChange={onChange} />
      <Box mb="10px" />
      <TextField name="password" value={form.password} onChange={onChange} />
      <Box mb="10px" />
      <TextField name="age" value={form.age} onChange={onChange} />
      <Box mb="10px" />
      <Select label="ID товара в POS" fullWidth MenuProps={{ autoFocus: true }} >
        <ListSubheader sx={{ margin: "5px 0" }}>
          <TextField
            autoFocus
            value={search_pos}
            onKeyDown={(e) => {
              if (e.key !== "Escape") {
                e.stopPropagation();
              }
            }}
            onChange={handleSearchPos} size="small" fullWidth placeholder="Search" />
        </ListSubheader>

        {filteredUsers.map(user => (
          <MenuItem key={user.id}>{user.name}</MenuItem>
        ))}

      </Select>

      <Button onClick={onSubmit}>Submit</Button>


    </div>
  )
}