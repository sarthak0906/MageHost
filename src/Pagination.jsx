import React from 'react'
// import { Pagination } from 'semantic-ui-react';
import { Pagination as Page } from 'antd';
import 'antd/dist/antd.css';

const PaginationExampleCompact = (props) => {
    // const [current, setCurrent] = React.useState(1);

    return (
        // <div>
            // <Pagination
            //     boundaryRange={0}
            //     defaultActivePage={1}
            //     ellipsisItem={null}
            //     firstItem={null}
            //     lastItem={null}
            //     siblingRange={1}
            //     totalPages={10}
            // />
            < Page 
                current={props.pageNo} 
                onChange={(p) => props.onChange(p)} 
                total={50}
            />
        // </div>
    )
}

export default PaginationExampleCompact
