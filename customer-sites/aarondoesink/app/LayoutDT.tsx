import Header from "./(header)/Header";
export default function LayoutDT({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>DT Header</Header>
      {children}
    </>
  );
}
