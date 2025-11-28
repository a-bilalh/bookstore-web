

export default function Home() {
        
    return (
        <>
            <Header />
            <MyHorizontalList category={"fiction"} count={10}/>
            <MyHorizontalList category={"nonfiction"} count={10}/>
        </>
    )

}