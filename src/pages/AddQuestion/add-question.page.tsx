import { useState, FormEvent } from 'react';
import styles from './add-question.module.css';
import { AddQuestionDto, QuestionCategory, QuestionDto } from '../../types';
import { questionCategoryList } from '../../consts';
import { Popup } from '../../common';

function AddQuestionPage() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<QuestionCategory>(QuestionCategory.REACT);

  const saveQuestionToLocalStorage = (question: AddQuestionDto) => {

    const existingQuestionsJson = localStorage.getItem('questions');

    const existingQuestions: QuestionDto[] = existingQuestionsJson ? JSON.parse(existingQuestionsJson) : [];

    const updatedQuestions = [...existingQuestions, question];

    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newQuestion: QuestionDto | null = title && description && category
      ? {
        id: Date.now(),
        title: title,
        description: description,
        category: category
      }
      : null;

    if (newQuestion) {
      saveQuestionToLocalStorage(newQuestion);
      setSuccessPopupVisible(true)
    } else {
      setFailPopupVisible(true)
    }
  };

  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [failPopupVisible, setFailPopupVisible] = useState(false);

  const successPopupOnClose = () => {
    setSuccessPopupVisible(false);
  };

  const failPopupOnClose = () => {
    setFailPopupVisible(false);
  };

  return (
    <div className={styles.addQuestionPage}>
      <h2>Add your question</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Title
          <input
            type="text"
            placeholder="Enter title"
            className={styles.input}
            value={title as string}
            onChange={(e) => setTitle(e.target.value)}
            minLength={3}
            maxLength={20}
            required
          />
        </label>

        <label className={styles.label}>
          Description
          <input
            type="text"
            width={500}
            placeholder="Enter description"
            className={styles.input}
            value={description as string}
            onChange={(e) => setDescription(e.target.value)}
            minLength={10}
            maxLength={60}
            required
          />
        </label>

        <div className={styles.inputField}>
          <label className={styles.label}>
            Category:
            <select
              className={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value as QuestionCategory)}
            >
              {questionCategoryList.map((item, index) => (
                <option key={index} className={styles.option} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button className={styles.button} type="submit">Add</button>
      </form>
      <Popup
        title="Success"
        message="Question added to storage!"
        isOpen={successPopupVisible}
        onClose={successPopupOnClose}
      />
      <Popup
        title="Fail"
        message="Something went wrong!"
        color='red'
        isOpen={failPopupVisible}
        onClose={failPopupOnClose}
      />
    </div>
  );
}

export { AddQuestionPage };

