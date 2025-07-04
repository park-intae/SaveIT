export default function ExpDetail(){
    <section className='expDetail'>
                {/* <table>
            테이블이에요
            <tr>
             {날짜.map((item,index)=>(<th key={index}>{item.일자}</th>))}
              <th>
                날짜
              </th>
            </tr>
            <tr>
              <td>
              <div>
                <p className='dayExp'>일 소비 합계</p>
                <p className='daySave'>일 저축 합계</p>
              </div>
              <article>
                <div className='expLog'>어디에 0000원</div>
                <button className='addExp'>+</button>
              </article>
              </td>
            </tr>
          </table> */}
                {/* <p className="Date">000</p> */}
                <article className="expTable">
                    테이블이에요
                    <div>
                        {/* {날짜.map((item,index)=>(<th key={index}>{item.일자}</th>))} */}
                        <div>
                            날짜
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p className='dayExp'>일 소비 합계</p>
                                <p className='daySave'>일 저축 합계</p>
                            </div>
                            <article>
                                <div className='expLog'>어디에 0000원</div>
                                <button className='addExp'>+</button>
                            </article>
                        </div>
                    </div>
                </article>
            </section>
}