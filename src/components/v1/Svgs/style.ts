import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default makeStyles<Theme, {revert: boolean}>((theme: Theme) => {
  return {
        path: {
            transform: ({ revert }: { revert: boolean }) => revert ? "translateX(-50%) rotateY(180deg)" : "rotateY(0deg)"
        }
    }
});

