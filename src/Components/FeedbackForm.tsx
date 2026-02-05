import { useState } from "react";
import "./FeedbackForm.css";

type FormData = {
  name: string;
  email: string;
  feedback: string;
  rating: string;
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  // ✅ 给事件加类型 + 正确拿 value
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ 表单提交事件类型
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const confirmationMessage = `
Name: ${formData.name}
Email: ${formData.email}
Feedback: ${formData.feedback}
Rating: ${formData.rating}
`;

    const isConfirmed = window.confirm(
      `Please confirm your details:\n\n${confirmationMessage}`
    );

    if (!isConfirmed) return;

    console.log("Submitting feedback:", formData);

    setFormData({
      name: "",
      email: "",
      feedback: "",
      rating: "",
    });

    alert("Thank you for your valuable feedback!");
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>

      <h2>Tell Us What You Think</h2>
      <h2>Tell Us What You Think</h2>
      <h2>Tell Us What You Think</h2>

      <label>
        Name
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </label>

      <label>
        Feedback
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Write your feedback..."
          rows={5}
        />
      </label>

      <label>
        Rating
        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value="">Select</option>
          <option value="1">1 - Bad</option>
          <option value="2">2</option>
          <option value="3">3 - OK</option>
          <option value="4">4</option>
          <option value="5">5 - Great</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
