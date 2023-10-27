"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
const TicketForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-Type": "application/json",
    });

    if (!res.ok) {
      throw new Error("failed to create ticket");
    }
    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    category: "",
    priority: 1,
    progress: 0,
    status: "not yet started",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center ">
      <form
        className="flex flex-col gap-3 py-10 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-defaultText capitalize font-medium">
          Create your new Ticket
        </h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          required={true}
          onChange={handleChange}
          value={formData.description}
        ></textarea>

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Figma Project">Figma Project</option>
        </select>

        <label>Priority</label>
        <div className="flex justify-start gap-4 items-center">
          <input
            type="radio"
            name="priority"
            id="priority-1"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className="text-green-400 mt-0 lg:text-2xl" htmlFor="priority-1">
            1
          </label>
          <input
            type="radio"
            name="priority"
            id="priority-2"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className="text-green-400 mt-0 lg:text-2xl" htmlFor="priority-2">
            2
          </label>
          <input
            type="radio"
            name="priority"
            id="priority-3"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className="text-green-400 mt-0 lg:text-2xl" htmlFor="priority-3">
            3
          </label>
          <input
            type="radio"
            name="priority"
            id="priority-4"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className="text-green-400 mt-0 lg:text-2xl" htmlFor="priority-4">
            4
          </label>
          <input
            type="radio"
            name="priority"
            id="priority-5"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label className="text-green-400 mt-0 lg:text-2xl" htmlFor="priority-5">
            5
          </label>
        </div>
        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
        <select name="status" id="status" onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <div className="flex items-center justify-center">
          <input type="submit" value="Create Ticket" className="btn max-w-sm " />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
