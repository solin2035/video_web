import React from "react";
import styles from "@/assets/styles/aspectRatioBox.module.scss";

interface AspectRatioBoxProps {
  ratio?: number; // 宽高比，例如 16 / 9
  children?: React.ReactNode;
  style?: React.CSSProperties; // 允许传递额外的样式
}

const AspectRatioBox: React.FC<AspectRatioBoxProps> = ({
  ratio = 16 / 9,
  children,
  style,
}) => {
  // 将 ratio 转换为 CSS 变量
  const aspectRatioStyle = {
    "--aspect-ratio": ratio.toFixed(2), // 保留两位小数
    ...style,
  } as React.CSSProperties;

  return (
    <div className={styles.aspectRatioBox} style={aspectRatioStyle}>
      <div className={styles.aspectRatioContent}>{children}</div>
    </div>
  );
};

export default AspectRatioBox;
