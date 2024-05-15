import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ posts }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>Volunteer Needed</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            posts?.map(post => <tr key={post._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={post?.thumbnail} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{post?.post_title}</div>
                                            <div className="text-sm opacity-50">{post.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {post?.category}
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">DeadLine : {post?.deadline}</span>
                                </td>
                                <td>{post?.volunteers_needed}</td>
                                <th>
                                    <Link to={`/postDetails/${post?._id}`}><Button fullWidth>View Details</Button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;