import * as React from "react"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { Book, Chapter } from "../data/Chapter"
import { MetabookF } from "../data/Metabook"
import LanguageSelect from "./LanguageSelect"
import {Notes} from '../data/Note'
import './style.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.text.secondary,
}))

export default function BookView(
  leftBook: Book,
  rightBook: Book,
  leftChapter: Chapter,
  rightChapter: Chapter,
  leftNotes: Notes,
  rightNotes: Notes,
  metabookF: MetabookF,
  chId: number,
  isSplitView: boolean
) {
  return (
    <Box sx={{ width: "90%" }}>
      <Grid
        container
        justifyContent="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Grid item>
            <LanguageSelect
              leftBook={leftBook.id}
              rightBook={rightBook.id}
              chapter={chId}
              metabookF={metabookF}
              lr={false}
            />
          </Grid>
          <Grid item style={{margin: '10px 0'}}>
            <Item>
              {leftBook.author} "{leftBook.title}"
            </Item>
          </Grid>
          <Grid container justifyContent="center" style={{marginBottom: '10px', textAlign: 'center'}}>
            <Item>{leftChapter.title}</Item>
          </Grid>
          <Grid item>
            <Item>{leftChapter.txt}</Item>
            {leftNotes.filter(n => n.chapter === chId).map(n => <Item>{n.id}. {n.txt}.</Item>)}
          </Grid>
        </Grid>
        {isSplitView && (
          <Grid item xs={6}>
            <Grid item>
            <LanguageSelect
              leftBook={leftBook.id}
              rightBook={rightBook.id}
              chapter={chId}
              metabookF={metabookF}
              lr={true}
            />
            </Grid>
            <Grid item style={{margin: '10px 0'}}>
              <Item>
                {rightBook.author} "{rightBook.title}"
              </Item>
            </Grid>
            <Grid container justifyContent="center" style={{marginBottom: '10px', textAlign: 'center'}}>
              <Item>{rightChapter.title}</Item>
            </Grid>
            <Grid item>
              <Item>{rightChapter.txt}</Item>
              {rightNotes.filter(n => n.chapter === chId).map(n => <Item>{n.id}. {n.txt}.</Item>)}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
