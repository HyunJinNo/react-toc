import { TocModal } from "./TocModal";
import { useModal } from "./hooks/useModal";
import { ListIcon } from "./ListIcon";

interface TocTopBarProps {
  title: string;
  className?: string;
  titleClassName?: string;
  listIconClassName?: string;
}

export const TocTopBar = ({
  title,
  className,
  titleClassName,
  listIconClassName,
}: TocTopBarProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={["react-toc-top-bar", className].join(" ")}>
        <div className={["react-toc-top-bar-title", titleClassName].join(" ")}>
          {title}
        </div>
        <button onClick={openModal}>
          <ListIcon
            className={["react-toc-list-icon", listIconClassName].join(" ")}
          />
        </button>
      </div>
      <TocModal title={title} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
