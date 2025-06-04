import React from "react";

import * as S from "./PageLayout.styled";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <S.Layout>{children}</S.Layout>;
};

export default PageLayout;
