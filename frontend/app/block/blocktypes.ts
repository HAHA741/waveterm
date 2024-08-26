// Copyright 2024, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { NodeModel } from "@/layout/index";
export interface BlockProps {
    preview: boolean;
    nodeModel: NodeModel;
}

export interface BlockComponentModel {
    onClick?: () => void;
    onFocusCapture?: React.FocusEventHandler<HTMLDivElement>;
    blockRef?: React.RefObject<HTMLDivElement>;
}

export interface BlockFrameProps {
    blockModel?: BlockComponentModel;
    nodeModel?: NodeModel;
    viewModel?: ViewModel;
    preview: boolean;
    numBlocksInTab?: number;
    children?: React.ReactNode;
}
