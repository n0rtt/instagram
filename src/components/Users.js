import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                alt="man"
                name="Random_Man"/>
            <div className="users__block">
                <User 
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="man"
                    name="Random_Man"
                    min/>
                <User 
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="man"
                    name="Random_Man"
                    min/>
                <User 
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="man"
                    name="Random_Man"
                    min/>
                <User 
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="man"
                    name="Random_Man"
                    min/>
            </div>
        </div>
    )
}