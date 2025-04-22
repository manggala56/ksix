import { Dispatch, ReactNode, SetStateAction } from 'react';

interface ChildrenProp {
    children?: ReactNode;
}

interface ModalProp {
    children?: ReactNode;
    status?: boolean;
    setter: Dispatch<SetStateAction<boolean>>;
}

export const ModalHeader = ({ children }: ChildrenProp) => {
    return (
        <>
            <div className="font-montserrat-regular text-2xl font-semibold">{children ?? 'Modal Header'}</div>
        </>
    );
};

export const ModalBody = ({ children }: ChildrenProp) => {
    return <>{children}</>;
};

export const ModalFooter = ({ children }: ChildrenProp) => {
    return <>{children}</>;
};

export const Modal = ({ children, status = false, setter }: ModalProp) => {
    return (
        <>
            <div className={`absolute h-screen w-screen ${status ? '' : 'hidden'}`}>
                <div className="relative h-full w-full">
                    <div className="absolute z-0 h-full w-full bg-black opacity-55"></div>
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                        <div className="w-full max-w-[28rem] rounded-md border border-neutral-200 bg-neutral-900 px-3 py-3">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
