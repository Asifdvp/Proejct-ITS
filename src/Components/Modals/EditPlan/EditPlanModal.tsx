import React, { useState } from "react";
import "./index.css";
import "../style.css"
import ModalComponent from "../ModalComponent";
import { Grid } from "@mui/material";
import ContainedButton from "../../Buttons/ContainedButton";
import TextArea from "../../Inputs/TextArea";
import StatusInput from "../../Inputs/StatusInput";
import DateInput from "../../Inputs/DateInput";
import TextInput from "../../Inputs/TextInput";
import SelectInput from "../../Inputs/SelectInput";
const EditPlanModal = () => {
  const [openE, setOpen] = useState(false);
  const handleOpenE = () => setOpen(true);
  const handleCloseE = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpenE} >Open Edit Modal</button>
      <ModalComponent open={openE} handleClose={handleCloseE} clear={false}>
        <div className="edit-plan-modal">
          <Grid container spacing={1.5}>
            <Grid item xs={2.4}>
              <TextInput
                placeholder={"1,2"}
                label={"Task Nomresi"}
                disAble={false}
              />
            </Grid>
            <Grid item xs={2.4}>
              <SelectInput />
            </Grid>
            <Grid item xs={2.4}>
              <SelectInput />
            </Grid>
            <Grid item xs={2.4}>
              <DateInput />
            </Grid>
            <Grid item xs={2.4}>
              <DateInput />
            </Grid>
          </Grid>
          <Grid container spacing={1.5} mt={4}>
            <Grid item xs={3}>
              <TextInput
                placeholder={"1,2"}
                label={"Task Nomresi"}
                disAble={false}
              />
            </Grid>
            <Grid item xs={3}>
              <TextInput
                placeholder={"1,2"}
                label={"Task Nomresi"}
                disAble={false}
              />
            </Grid>
            <Grid item xs={3}>
              <DateInput />
            </Grid>
            <Grid item xs={3}>
              <StatusInput />
            </Grid>
          </Grid>
          <Grid container spacing={1.5} mt={4}>
            <Grid item xs={6}>
              <TextArea
                placeholder={"1,2"}
                label={"Task Nomresi"}
                limit={4000}
              />
            </Grid>
            <Grid item xs={6}>
              <TextArea
                placeholder={"1,2"}
                label={"Task Nomresi"}
                limit={4000}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex" }}
              justifyContent="space-between"
            >
                 <ContainedButton
                paddingSize={"16px 73px"}
                text={"Sil"}
                variantName={"outlined"}
                disable={"false"}
                onClick={() => console.log("Asif")}
              />
              <ContainedButton
                paddingSize={"16px 32px"}
                text={"Yadda Saxla"}
                variantName={"contained"}
                disable={"false"}
                onClick={() => console.log("Asif")}
              />
             
            </Grid>
          </Grid>
        </div>
      </ModalComponent>
    </div>
  );
};

export default EditPlanModal;
