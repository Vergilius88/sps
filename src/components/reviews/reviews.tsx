import "./reviewsStyles.scss"

export const Reviews = () => {
    return (
        <section className="reviews">
            <article className="reviewItem">
                <h3 className="reviewItemAuthor"><span>Sunny Rizki</span> | Consultant Manager Saphire Residence</h3>
                <p className="reviewItemText">SPS Always provide the best results for each of our projects, One that we believe in building a safe delivery package!
                    Trusted to order again</p>
            </article>
            <div className="paginationWrapper">
                <div className="pageNumbers">1/5</div>
                <div className="arrowsWrapper">
                    <span className="arrow">&#8592;</span>
                    <span className="arrow">&#8594;</span>
                </div>
            </div>
        </section>
    )
}