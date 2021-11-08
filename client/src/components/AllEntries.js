import {Table} from 'reactstrap';

const AllEntries = ({ entries }) => {
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> State </th>
                        <th> Country </th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        entries.map((data, idx) => (
                            <tr>
                                <td> {idx+1} </td>
                                <td> {data.name} </td>
                                <td> {data.email} </td>
                                <td> {data.state} </td>
                                <td> {data.country} </td>
                                <td>{data.date} </td> 
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </>
    )
}

export default AllEntries;