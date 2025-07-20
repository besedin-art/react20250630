import { Counter } from "../Counter/Counter";
import { Button } from "../Button/Button";
import { useForm } from "./useForm";


export const ReviewForm = () => {
  const { form, setName, setText, setRating, clear } = useForm();

  const { name, text, rating } = form;

  return (
    <form onSubmit={e => { e.preventDefault(); }}>
      <div>
        <input type="text" placeholder="Имя" value={name} onChange={e => { setName(e.target.value) }} />
      </div>
      <div>
        <textarea placeholder="Текст" value={text} onChange={e => { setText(e.target.value) }} />
      </div>
      <div>
        Рейтинг: <Counter max="5" value={rating} onChange={value => { setRating(value) }} />
      </div>
      <Button type="button" onClick={clear} buttonType="clear">clear</Button>
    </form>
  );
}