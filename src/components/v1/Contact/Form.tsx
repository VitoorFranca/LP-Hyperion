import * as React from "react";
import { Container, InputBase, InputBaseProps, Input, InputProps, Box } from "@mui/material";
import useStyles from "./style"
import { IMaskInput } from "react-imask";
import { FormProvider, useForm } from "react-hook-form";
import ValidButton from "../ValidButton";
import { send } from "@emailjs/browser"

type Props = {};
interface InputValidProps extends InputProps {
    error?: boolean;
    register?: any;
};
type Inputs = {
    empresa: string;
    email: string;
    nome: string;
    message: string;
  };
interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }

const Form = ({ }: Props) => {
    const { register, handleSubmit, reset, formState: { errors: formErros },  } = useForm<Inputs>();
    
    const [values, setValues] = React.useState({
        phone: '',
      });
    const [invalidPhone, setInvalidPhone] = React.useState(false);
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };

    const classes = useStyles({});

    const onSubmit = async (data: Inputs) => {
        const { email, empresa, message, nome  } = {...data};

        if(!values.phone) return setInvalidPhone(true);

        send("service_4d60g5l","template_mlpzjvp",{
            nome,
            empresa,
            email,
            message,
            phone: values.phone
            }, process.env.REACT_APP_PUBLIC_KEY);

        reset({email: '', empresa: '', message: '', nome: ''});
        setInvalidPhone(false);
        setValues({phone: ''})

    };

    
    const errors = {
        ...formErros,
        phone: invalidPhone,
    }

    return (
        <Box
            className={classes.form}>
            {/* <FormProvider {...> */}
                <InputValid
                    register={register("nome", { required: true })}
                    error={!!formErros?.nome}
                    placeholder="Nome*"
                />
                <InputValid
                    register={register("email", { required: true })}
                    error={!!formErros?.email}
                    placeholder="Email*"
                    type="email"
                />
                <InputValid
                    register={register("empresa", { required: true })}
                    error={!!formErros?.empresa}
                    placeholder="Empresa*"
                />
                <InputValid
                    required
                    placeholder="Telefone*"
                    name="phone"
                    id="phone"
                    error={!!errors?.phone}
                    value={values.phone}
                    onChange={handleChange}
                    // readOnly
                    inputComponent={TextMaskCustom as any}
                />
                <InputValid
                    register={register("message", { required: true })}
                    error={!!formErros?.message}
                    placeholder="Mensagem*"
                    type="text"
                    multiline
                    rows={5}
                    sx={{border: "1px solid #dfc100 !important", borderRadius: 1, padding: "14px !important"}}
                />
            {/* </FormProvider> */}

            <ValidButton
                validVariant="outlined"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: "17px !important" }}
                >
                    Enviar
            </ValidButton>
        </Box>
    );
};

export const InputValid = ({ error, register, ...props }:InputValidProps) => {
    const classes = useStyles({
        error
    });

    return (
        <Input
        className={classes.standardInput}
            {...register}
            {...props}
        />
    )
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, name, ...other } = props;
        
        return (
            <IMaskInput
            {...other}
            mask="(##) 0-0000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref as any}
            onChange={() => {}}
            onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
            overwrite
            />
        );
    },
  );

export default Form;