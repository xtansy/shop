import css from "./ProfileCard.module.css";

import { Link } from 'react-router-dom'

import { Icon } from "shared/ui/Icon/Icon";

export const ProfileCard = () => {
    return (
        <div className={css.card}>
            <h2>login</h2>
            <Link to="/wishlist">
                <Icon type="like" />
            </Link>
        </div>
    );
};

