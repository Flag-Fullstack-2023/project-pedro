import React from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  FormSelect,
  FormInput,
  FormLabel,
  FormWrapper,
} from "../addtask/addtask.style";
import logo from "_assets/images/logo.png";
import { Button } from "_components/atoms";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1i2tFg43acxCVK9X3fFFVM042qPRDVnw",
  authDomain: "projecto-971ef.firebaseapp.com",
  projectId: "projecto-971ef",
});

const AddTask = () => {
  const [addtak, setAddtask] = useState([]);
  const [taskdescription, setTaskdescription] = useState("");
  const [taskname, setTaskname] = useState("");
  const [taskpriority, setTaskpriority] = useState("");
  const navigator = useNavigate();
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "tasks");

  async function createTask() {
    const sendTask = await addDoc(userCollectionRef, {
      taskdescription,
      taskname,
      taskpriority,
    });
    setTaskdescription("");
    setTaskname("");
    setTaskpriority("");
  }

  const returnTask = () => {
    navigator("/task");
  };
  const isFormValid = () => {
    return taskdescription !== "" && taskname !== "" && taskpriority !== "";
  };
  const handleSubmit = () => {
    if (isFormValid()) {
      createTask();
    } else {
      alert("Erro Task não preenchido");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);

      setAddtask(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <FormWrapper>
        <img src={logo} alt="logo" />

        <FormLabel>Nome da Task</FormLabel>
        <FormInput
          type="text"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
          required
        />

        <FormLabel>Descrição da Task</FormLabel>
        <FormInput
          type="text"
          value={taskdescription}
          onChange={(e) => setTaskdescription(e.target.value)}
          required
        />
        <FormLabel>Prioridade da Task</FormLabel>
        <FormSelect
          value={taskpriority}
          onChange={(e) => setTaskpriority(e.target.value)}
          required
        >
          <option value="" disabled>
            Escolha a prioridade da task
          </option>
          <option value="normal">Normal</option>
          <option value="intermediate">Intermediate</option>
          <option value="high">High</option>
        </FormSelect>

        <FormSelect
          value={taskpriority}
          onChange={(e) => setTaskpriority(e.target.value)}
          required
        >
          value={taskpriority}
          onChange={(e) => setTaskpriority(e.target.value)}
          required
          <option value="">Escolha o status da task</option>
          <option value="high">Pending</option>
          <option value="intermediate">Incompleted</option>
          <option value="normal">Completed</option>
        </FormSelect>
        <Button onClick={handleSubmit}>Criar Task</Button>
        <br />
        <Button onClick={returnTask}>Voltar</Button>
      </FormWrapper>
    </>
  );
};

export default AddTask;
