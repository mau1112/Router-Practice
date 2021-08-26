import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const onFocusHandler = (e) => {
    setIsFocused(true);
  };
  const onBlurHandler = (e) => {
    setIsFocused(false);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    if (enteredAuthor.trim() === "" || enteredText === "") {
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <>
      <Prompt
        when={isFocused}
        message={(location) => "If you leave, ALL your data will be lost"}
      ></Prompt>
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={onFocusHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={onBlurHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
