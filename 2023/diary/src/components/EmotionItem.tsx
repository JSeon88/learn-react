import "./EmotionItem.css";

type Props = {
  id: number;
  img: string;
  name: string;
  onClick: (id: number) => void;
  isSelected: boolean;
};

const EmotionItem = ({ id, img, name, onClick, isSelected }: Props) => {
  const handlerOnClick = () => {
    onClick(id);
  };

  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={handlerOnClick}
    >
      <img alt={`emotions${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
